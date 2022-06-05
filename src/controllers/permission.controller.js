const permissionDbService = require("../services/permissionDb.service");

const verifyModules = async (modules) => {
  const idModules = modules.map((module) => module.id);
  const existsModules = await permissionDbService.existsModule(idModules);
  const modulesNotExists = idModules.filter(e => !existsModules.includes(e));

  return modulesNotExists;
}

class Controller {
  createPermission = async (req, res) => {
    try {
      const { name, modules } = req.permission;

      const modulesNotExists = await verifyModules(modules);
      if (modulesNotExists.length > 0)
        return res.status(400).json({ status: false, message: "One or some modules does not exists", data: modulesNotExists });

      await permissionDbService.createPermission(name, modules);

      res.status(200).json({
        status: true,
        message: 'Permission set successfully',
        data: null
      });
    } catch (error) {
      res.status(500).json({
        status: false,
        message: error.message || error,
        data: null
      });
    }
  }
}

module.exports = new Controller();
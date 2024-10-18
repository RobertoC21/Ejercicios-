const jwt = require('jsonwebtoken');


exports.verifyToken = (req, res, next) =>{
    const authHeader = req.headers['authorization'];
    if (!authHeader){
        return res.status(403).json({message: 'Se requiere un token autentificado'});
    }
    const token =authHeader.split('')[1];

    try {

        const decoded = jwt.verify(token, proccess.env.JWT_SECRET);
        req.userId = decoded.userId;
        req.userRole = decoded.userRole;
        next();
                
    } catch (error) {
        res.status(401).json({ message: 'token invalido o expirado '});
    }
    
};

exports.isAdmin = (req, res, next) => {
    if (req.userRole !== 'admin'){
        return res.status(403).json({ message: 'se requiere el rol de administrador' });
    }
    next();
};



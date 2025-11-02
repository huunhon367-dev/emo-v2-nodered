module.exports = {
    uiPort: process.env.PORT || 1880,
    
    adminAuth: {
        type: "credentials",
        users: [{
            username: "admin",
            password: "$2a$08$C5Micms3izsvl0KuyzHrh.JnnANvLsaHV7ViDwn7D.4vzdnxffi0u",
            // Password mặc định: "emov2123"
            // Đổi sau khi tạo xong
            permissions: "*"
        }]
    },
    
    httpAdminRoot: '/',
    httpNodeRoot: '/',
    ui: { path: "ui" },
    
    functionGlobalContext: {},
    
    logging: {
        console: {
            level: "info",
            metrics: false,
            audit: false
            credentialSecret: "emo_secret_key",
        }
    }
}

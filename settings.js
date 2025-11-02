module.exports = {
    uiPort: process.env.PORT || 1880,
    
    adminAuth: {
        type: "credentials",
        users: [{
            username: "admin",
            password: "emov2123",
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
        }
    }
}

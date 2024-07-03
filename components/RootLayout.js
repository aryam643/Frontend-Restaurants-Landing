const RootLayout = ({ children }) => {
    return (
        <html>
            <head>
                <title>Restaurant Landing</title>
            </head>
            <body>
                {children}
            </body>
        </html>
    );
};

export default RootLayout;

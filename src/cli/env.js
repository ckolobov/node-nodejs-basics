const parseEnv = () => {
    const RSS_vars = [];
    for (const [key, value] of Object.entries(process.env)) {
        if (key.slice(0, 4) === 'RSS_') {
            RSS_vars.push(`${key}=${value}`);
        }
    }
    console.log(RSS_vars.join('; '));
};

parseEnv();

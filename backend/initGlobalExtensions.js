global.requireWrapper = name => {
    return require(`${__dirname}/${name}`);
}
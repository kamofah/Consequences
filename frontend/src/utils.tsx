function formatPlayerNames(firstName: string, lastName: string): string{
    return firstName + ' ' +  lastName.charAt(0) + '.';
}

function formatShotCount(shotCount: string): string{
    return parseInt(shotCount) > 1 ? " shots" : " shot"
}

export {
    formatPlayerNames,
    formatShotCount
}
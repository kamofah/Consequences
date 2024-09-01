function formatPlayerNames(firstName: string, lastName: string): string{
    return firstName + ' ' +  lastName.charAt(0) + '.';
}

export {
    formatPlayerNames
}
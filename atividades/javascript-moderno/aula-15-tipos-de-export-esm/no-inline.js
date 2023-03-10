function group() {
    console.log('Export não-inline')
}

function groupExportDefault() {
    console.log('Export default não-inline')
}

export { group }
export default groupExportDefault
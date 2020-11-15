import CSS from 'csstype';

interface Style extends CSS.Properties {
    [index: string]: any
}
const styles: Style = {
    main: {
        backgroundColor: 'white',
        height: '87vh',
        margin: '10px',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        paddingTop: '100px'
    }
}

export { styles }
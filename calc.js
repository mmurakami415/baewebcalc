const update = (_v) => {
    document.querySelector( 'input' ).value = _v
}

const append = (_v) => {
    document.querySelector( 'input' ).value += _v
}
const calc = () => {
    const v = document.querySelector( 'input' ).value
    try {
        const f = new Function( 'return ' + v )
        update( f().toString() )
    } catch( _error ) {
        update( _error)
    }
}

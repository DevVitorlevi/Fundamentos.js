function LancarError(error) {
    throw 'Error ao Buscar Nome '
}
function ImprimirNomeGritado(obj) {
    try {
        console.log(obj.nome.toUpperCase() + '!!')
    } catch (e) {
        LancarError(e)
    } finally {
        console.log('Final')
    }
}
const obj = {
    nome: 'Oswaldo'
}
ImprimirNomeGritado(obj)
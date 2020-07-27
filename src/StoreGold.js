export default {
    state: {
        numero_oros: 0,
        actividades: [],

    },
    suma_oros: function (nuevo_oro) {
        this.state.numero_oros = this.state.numero_oros + nuevo_oro
    },
    addActividad: function (actividad) {
        this.state.actividades = [...this.state.actividades, actividad]
    },
    // una para dejar los oros en cero
    cero_oro: function () {
        this.state.numero_oros = 0
    },
    // otra para reiniciar el juego
    reseteo_actividad: function(){
        this.state.actividades=[]

    }



};
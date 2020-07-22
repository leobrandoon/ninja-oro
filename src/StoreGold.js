export default {
    state: {
        numero_oros: 0,
        actividades: [],
    },
    suma_oros: function (nuevo_oro) {
        this.state.numero_oros = this.state.numero_oros + nuevo_oro
    },
    addActividad: function (actividad) {
        this.state.actividades=[...this.state.actividades,actividad]
    }

};
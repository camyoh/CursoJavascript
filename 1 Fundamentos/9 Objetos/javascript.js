//crear objetos

const persona = {
    nombre: 'Miguel',
    apellido: 'Martinez',
    profesion: 'Diseñador gráfico',
    email: 'correo@correo.com',
    edad: 20,
    musica: ['pop','rock','jazz'],
    //objeto dentro de un objeto
    hogar:{
        ciudad: 'Bogota',
        pais:'Colombia'
    },
    cumpleanos: function(){
        return new Date().getFullYear() - this.edad;
    }
}
console.log(persona);
console.log(persona.apellido);
console.log(persona.musica);
console.log(persona.musica[1]);
persona.musica.push('reggae');
console.log(persona.musica);
console.log(persona.cumpleanos());

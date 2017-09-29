/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function crearGrupo() {
    this.nombreGrupo = document.getElementById("nombreGrupo").value;
    this.anoGrupo = document.getElementById("anoGrupo").value;
    this.alumnosMatriculados = [];

}

crearGrupo.prototype.matricular = function (Alumno) {
    this.alumnosMatriculados.push(Alumno);
}



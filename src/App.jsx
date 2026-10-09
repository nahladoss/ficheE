import mine from './assets/mine.jpeg' // adapte l'extension (.jpg, .jpeg…) si besoin
import './App.css'

const student = {
  nom: "Doss Nahla",
  email: "dossnahla@gmail.com",
  telephone: "+216 50 270 212",
  filiere: "Génie Logiciel et Systèmes d'Information",
  annee: "2ème année",
  groupe: "GLSI 2",
  ville: "Mahdia",
}

function App() {
  return (
    <div className="card">
      <img src={mine} alt={student.nom} className="photo" />
      <h1>Fiche étudiant</h1>

      <p><strong>Nom & Prénom :</strong> {student.nom}</p>
      <p><strong>Email :</strong> {student.email}</p>
      <p><strong>Téléphone :</strong> {student.telephone}</p>
      <p><strong>Filière :</strong> {student.filiere}</p>
      <p><strong>Année d'étude :</strong> {student.annee}</p>
      <p><strong>Groupe :</strong> {student.groupe}</p>
      <p><strong>Ville :</strong> {student.ville}</p>

      <button type="button" className="btn" onClick={() =>window.open(`https://mail.google.com/mail/?view=cm&to=${student.email}`,'_blank')
  }
>
  Contacter
</button>
    </div>
  )
}

export default App
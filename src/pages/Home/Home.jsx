import React from "react";
import SubjectCard from "../../components/SubjectCard/SubjectCard";
import { subjects } from "../../data/subjects";
import "./Home.css";

function Home() {
  return (
    <main className="home">
      <section>
        <div className="container">
          <div className="home-header">
            <h1>Continue Aprendendo</h1>
            <p>Acompanhe seu progresso e continue de onde parou</p>
          </div>
          <h2 className="section-title">Minhas Disciplinas</h2>
          <div className="subjects-grid">
            {subjects.map((subject) => (
              <SubjectCard key={subject.id} id={subject.id} name={subject.name} description={subject.description} professor={subject.professor} progress={30} materialsCount={12} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;

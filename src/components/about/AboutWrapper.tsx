import Header from "../shared/Header"
import { Paper } from "@material-ui/core";
import "./AboutWrapper.css";

function AboutWrapper() {
  return (
    <>
      <Header name="O applikácií" />
      <Paper elevation={3}>
        <p className="helperText">
          Webová stránka knižnice SPŠT v Bardejove. Na tejto stránke sú dostupné
          všetky knihy ktoré sa nachádzajú v školskej knižnici. Knižnicu nájdete
          pri vstupe na internát na 3 poschodí, smer doľava.
          <h1 className="ownerName">Správkyňou je Mgr. Nataša Dzubáková</h1>
        </p>
        <p className="helperText">
          Applikácia používa tieto technológie: React(Frontend knižnica)
          Nestjs(Backendový framework) Postgresql(Databáza).
        </p>
        <p className="helperText">
          Možnosť spýtať sa admina: <a className="text-red-800" href="/admin/chat">TU</a>
        </p>
      </Paper>
    </>
  )
}

export default AboutWrapper
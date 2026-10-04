import "../styles/components/LangTechList.css"

import LangTechEntry from "./entries/LangTechEntry"

import PostgresqlLogo from "../assets/postgresql-logo.png"
import MysqlLogo from "../assets/mysql-logo.svg"
import MongoDBLogo from "../assets/mongodb-logo.svg"
import DockerLogo from "../assets/docker-logo.svg"
import AWSLogo from "../assets/aws-logo.png"
import LinuxLogo from "../assets/linux-logo.svg"

import PySideLogo from "../assets/pyside-logo.png"
import ReactLogo from "../assets/react-logo.png"
import PreactLogo from "../assets/preact-logo.svg"

export default function TechList() {
  return <div className="lang-list">
    <LangTechEntry name="PostgreSQL" image={PostgresqlLogo} />
    <LangTechEntry name="MySQL" image={MysqlLogo} />
    <LangTechEntry name="MongoDB" image={MongoDBLogo} />
    <LangTechEntry name="Docker" image={DockerLogo} />
    <LangTechEntry name="Linux" image={LinuxLogo} />
    <LangTechEntry name="AWS" image={AWSLogo} />
    <LangTechEntry name="PySide" image={PySideLogo} />
    <LangTechEntry name="React" image={ReactLogo} />
    <LangTechEntry name="Preact" image={PreactLogo} />
  </div>
}

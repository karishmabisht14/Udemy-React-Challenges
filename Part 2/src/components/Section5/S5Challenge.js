import "./style.css";

export default function S5Challenge() {
  const skills = [
    {
      skill: "HTML+CSS",
      level: "advanced",
      color: "blue",
    },
    {
      skill: "Bootstrap",
      level: "advanced",
      color: "yellow",
    },
    {
      skill: "JavaScript",
      level: "intermediate",
      color: "grey",
    },
    {
      skill: "React Js",
      level: "beginner",
      color: "pink",
    },
    {
      skill: "Rest API",
      level: "beginner",
      color: "skyblue",
    },
    {
      skill: "Git & Github",
      level: "intermediate",
      color: "orange",
    },
  ];

  return (
    <div className="card">
      <Avatar photo="karishma.jpg" name="My pic" />
      <Intro />
      <SkillList skillList={skills} />
    </div>
  );
}

function Avatar(props) {
  return (
    <div className="avatar">
      <img src={props.photo} alt={props.name} />
    </div>
  );
}

function Intro() {
  return (
    <div className="data">
      <h1>Karishma Bisht</h1>
      <p>
        I am a Fresher with having Front End Developer qualities. When I am free
        from this coding I like to take photos, dancing and playing vedio games.
      </p>
    </div>
  );
}

function SkillList({ skillList }) {
  return (
    <ul className="skill-list">
      {skillList.map((skill) => (
        <Skill skillObj={skill} key={skill.skill} />
      ))}
      {/* <Skill skill="HTML+CSS" emoji="💪" color="blue" />
      <Skill skill="Bootstrap" emoji="💪" color="yellow" />
      <Skill skill="JavaScript" emoji="💪" color="grey" />
      <Skill skill="ReactJs" emoji="😉" color="pink" />
      <Skill skill="RestAPI" emoji="😊" color="skyblue" />
      <Skill skill="Git & GitHub" emoji="🤩" color="orange" /> */}
    </ul>
  );
}

function Skill({ skillObj }) {
  return (
    <li className="skill" style={{ backgroundColor: skillObj.color }}>
      <span>{skillObj.skill}</span>
      <span>
        {skillObj.level === "beginner" && "👶"}
        {skillObj.level === "intermediate" && "👍"}
        {skillObj.level === "advanced" && "💪"}
      </span>
    </li>
  );
}

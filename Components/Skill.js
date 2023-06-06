const Skill = ({ skill }) => {
  return skill.length > 0 ? (
    <div>
      <h3>Skills</h3>
      <ul>
        {skill.map((item, index) => (
          <li style={{ listStyleType: `` }} key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  ) : null;
};

export default Skill;

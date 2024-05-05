import Badge from "@/components/Badge";
import { skills } from "@/json/skills";

const Skills = () => {
  return (
    <div className="mt-10 py-4 pb-4 border-t border-b">
      <div className="text-[25px] text-black font-medium">
        <div>Conocimientos</div>
        <div className=" flex gap-4 mt-2 overflow-x-auto pb-3">
          {skills.map((item, index) => (
            <div key={index}>
              <Badge name={item.name} color={item.color} bg={item.bg} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;

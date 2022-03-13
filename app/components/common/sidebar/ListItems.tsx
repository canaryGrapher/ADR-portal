// importing components
import { FiCheck } from "react-icons/fi";

// importing types
import {
  ListItemsProps,
  TemplateProps,
  SidebarNumberingBullets,
} from "~/types/common/sidebar";

const ListItems = (props: ListItemsProps) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row">
        <div className="pr-3">
          <SidebarNumberingBullet
            isCompleted={props.isCompleted}
            isActive={props.isActive}
            bulletNumber={props.number}
          />
        </div>
        <p
          className="cursor-pointer hover:underline"
          onClick={() => props.clicker}
        >
          {props.name}
        </p>
      </div>
      <div className="block pl-10">
        {props.isActive &&
          props.children?.map((child: TemplateProps, index: number) => {
            return (
              <div key={index}>
                <div className="flex flex-row">
                  <p>{child.name}</p>
                </div>
                <div className="block pl-10">
                  {child.isActive &&
                    child.children?.map(
                      (subChild: TemplateProps, subIndex: number) => {
                        return (
                          <div key={subIndex}>
                            <div className="flex flex-row">
                              <div className="pr-3">
                                <p>{subChild.name}</p>
                              </div>
                            </div>
                          </div>
                        );
                      }
                    )}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

const SidebarNumberingBullet = (props: SidebarNumberingBullets) => {
  if (props.isActive) {
    return (
      <p className="font-bold border-2 border-[#6C567B] rounded-full h-7 w-7 text-center">
        {props.bulletNumber + 1}
      </p>
    );
  } else if (props.isCompleted) {
    return (
      <div className="border-2 border-[#6C567B] bg-[#6C567B] rounded-full h-7 w-7 text-center text-white flex flex-col justify-center">
        <FiCheck className="mx-auto my-auto font-extrabold" />
      </div>
    );
  } else {
    return (
      <p className="font-bold border-2 border-[#7E7E7E] rounded-full h-7 w-7 text-center text-[#7E7E7E]">
        {props.bulletNumber + 1}
      </p>
    );
  }
};

export { ListItems };

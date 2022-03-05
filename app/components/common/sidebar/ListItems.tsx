// importing types
import { ListItemsProps, TemplateProps } from "~/types/common/sidebar";

const ListItems = (props: ListItemsProps) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row">
        <div className="pr-3">
          <p>{props.number + 1}</p>
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
                  <div className="pr-3"></div>
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

export { ListItems };

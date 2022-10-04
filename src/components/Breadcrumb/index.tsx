import React, { Fragment } from "react";
import { RightArrowIcon } from "./icons";
import { Item, BreadcrumbContainer, ListItems } from "./styles";
import { IBreadcrumb } from "@typings";
import Link from "@designs/Link";

interface IBreadcrumbProps {
  className?: string;
  items: IBreadcrumb[];
}

const Breadcrumb: React.FC<IBreadcrumbProps> = ({ items, className }) => {
  const listItems = items.filter((item) => item.name);

  return (
    <BreadcrumbContainer className={className}>
      <div>
        <ListItems>
          {listItems.map((item, index) => (
            <Fragment key={String(index)}>
              <Item
                onClick={() => item?.onClick?.()}
                isLast={index == listItems.length - 1}
              >
                {index == listItems.length - 1 ? (
                  <div>{item.name}</div>
                ) : (
                  <Link path={item?.link || "#"} params={item?.params}>
                    {item.name}
                  </Link>
                )}
              </Item>
              {index !== listItems.length - 1 && <RightArrowIcon />}
            </Fragment>
          ))}
        </ListItems>
      </div>
    </BreadcrumbContainer>
  );
};

export default Breadcrumb;

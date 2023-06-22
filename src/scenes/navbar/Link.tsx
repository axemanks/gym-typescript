import AnchorLink from "react-anchor-link-smooth-scroll"
import {SelectedPage } from "@/shared/types"


type Props = {
    page: string,
    selectedPage: SelectedPage,
    setSelectedPage: (value: SelectedPage) => void;
}

const Link = ({
    page,
    selectedPage,
    setSelectedPage,
}: Props) => {
    const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage; // because we convert to lower, we need to enforce with "as"


  return (
    <AnchorLink
        href={`#${lowerCasePage}`}
        className={`${selectedPage === lowerCasePage} ? "text-primary-500" : ""}transition duration-500 hover:text-primary-300`}
        
        onClick={() => setSelectedPage(lowerCasePage)} //setSelectedPage when it is clicked on
    >
        {page}
    </AnchorLink>
  )
}

export default Link
import { Section } from './styles'
import { Avatar } from '../Avatar'
import { FiMessageSquare, FiStar } from "react-icons/fi";

export const Question = ({title, postDate, content, stars, comments, userSend}) => {
   return (
      <Section className="mb-5">
         <div className="is-flex is-align-items-center" style={{ gap: "1rem" }}>
            <Avatar />
            <div>
               <p className="has-text-black" style={{ color: "#808080" }}>
                  {'eRC'}
               </p>
               <span className="is-size-7	">{postDate}</span>
            </div>
         </div>
         <div className="my-4 ">
            <h2 className="mb-1 is-size-5 has-text-weight-bold">
              {title}
            </h2>
            <p>
               {content}
            </p>
         </div>
         <div className="is-flex is-justify-content-flex-end">
            <div className="is-flex" style={{ gap: "1.25rem" }}>
               <span
                  className="is-flex is-align-items-center"
                  style={{ gap: "0.25rem" }}
               >
                  <FiStar />
                  <p>{stars}</p>
               </span>
               <span
                  className="is-flex is-align-items-center"
                  style={{ gap: "0.25rem" }}
               >
                  <FiMessageSquare />
                  <p>{comments}</p>
               </span>
            </div>
         </div>
      </Section>
   );
};

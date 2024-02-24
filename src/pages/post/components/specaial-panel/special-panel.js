import styled from "styled-components"
import { Icon } from "../../../../components"

const specialPanelContainer = ({className, publishedAt ,editButton}) =>{
    return( 
        <div className={className}>
        <div className="special-panel">
          <div className="published-at">
            <Icon
              id="fa-regular fa-calendar"
              margin="0 10px 0 0px"
              size="16px"
            />
          </div>
          {publishedAt}
        </div>
        <div className="buttons">
            {editButton}
          <Icon id="fa-solid fa-trash" size="16px" />
        </div>
      </div>
    )
}

export const SpecialPanel = styled(specialPanelContainer)`
    margin : ${({margin}) => margin};
    display: flex;
    align-items: center; 
    justify-content: space-between;

    & .special-panel {
      display: flex;
      align-items: center;
    }

    & .buttons {
      display: flex;
    }

    & .published-at {
        display: flex;
        float left;
      }
    
  
`;
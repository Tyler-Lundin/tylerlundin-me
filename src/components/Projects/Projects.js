import styled, {keyframes} from 'styled-components'
import bg1 from '../__ASSETS__/LundinOptometryDisplay.webp'
import React from 'react'
import Project from './Project'
import Parallax from '../Parallax/Parallax'
import Description from './Description'

const Projects = () => {

  return (
      <S.Projects>
        <Parallax speed={120} bgColor={'rgba(40,40,50,.5)'}>
            <S.ProjectGrid>
                <Project thumbnail={bg1} alt={'Lundin Optometry Website Screenshot'} index={1}>
                    <Description 
                        index={1}
                        descTitle='Lundin Optometry' 
                        desc='Lundin Optometry was a website I created for my Dad to drive more customers to his business.  The first 48 hours we had our first online booking made.'
                    />
                </Project>

                <Project thumbnail={bg1} alt={'Lundin Optometry Website Screenshot'} index={2}>
                    <Description 
                        index={2}
                        descTitle='Lundin Optometry' 
                        desc='Lundin Optometry was a website I created for my Dad to drive more customers to his business.  The first 48 hours we had our first online booking made.'
                    />
                </Project>

                <Project thumbnail={bg1} alt={'Lundin Optometry Website Screenshot'} index={2}>
                    <Description 
                        index={2}
                        descTitle='Lundin Optometry' 
                        desc='Lundin Optometry was a website I created for my Dad to drive more customers to his business.  The first 48 hours we had our first online booking made.'
                    />
                </Project>

                <Project thumbnail={bg1} alt={'Lundin Optometry Website Screenshot'} index={2}>
                    <Description 
                        index={2}
                        descTitle='Lundin Optometry' 
                        desc='Lundin Optometry was a website I created for my Dad to drive more customers to his business.  The first 48 hours we had our first online booking made.'
                    />
                </Project>

                <Project thumbnail={bg1} alt={'Lundin Optometry Website Screenshot'} index={2}>
                    <Description 
                        index={2}
                        descTitle='Lundin Optometry' 
                        desc='Lundin Optometry was a website I created for my Dad to drive more customers to his business.  The first 48 hours we had our first online booking made.'
                    />
                </Project>

            </S.ProjectGrid>
        </Parallax>
    </S.Projects>
  )
}

export default Projects

const S = {}

S.ProjectGrid = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 15px;
    box-sizing: border-box;
    gap: 150px;
`
S.Projects = styled.div`
    position: relative;
    z-index: 75;
    width: 100%;
    height: 100vh;
    top: 30%;
    @media (max-width: 650px) {

    }
`

import { css } from '@emotion/css';
import { useSelector } from 'react-redux';

export const Creature = () => {
  // reselect -> ships with rtk
  const { mainColor, eyeColor, secondaryColor } = useSelector(({ profile }) => {
    const { mainColor, eyeColor, secondaryColor } = profile.creature;

    return { mainColor, eyeColor, secondaryColor };
  });

  const cssClass = css`
    border: 3px solid ${secondaryColor};
    width: 220px;
    height: 160px;
    background-color: ${mainColor};
    border-radius: 30px;
  `;

  const creatureEye = css`
    background-color: ${mainColor};
    margin-top: 55px;
    display: flex;
    justify-content: center;
    gap: 30px;
  `;

  const eyeLeft = css`
    border-radius: 50%;
    background-color: white;
    width: 35px;
    height: 35px;
  `;

  const eyeLid = css`
    width: 100%;
    height: 100%;
    background-color: ${secondaryColor};
    position: relative;
    top: -35px;
    translate: calc(-);

    animation-duration: 3s;
    animation-fill-mode: forwards;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  `;

  const eyeIris = css`
    background-color: ${eyeColor};
    width: 7px;
    height: 7px;
    border-radius: 50%;
    position: relative;
    top: -17px;
    right: -12px;
  `;

  const eyeRight = css`
    border-radius: 50%;
    background-color: white;
    width: 35px;
    height: 35px;
  `;

  const creatureNoseLine = css`
    display: flex;
    justify-content: center;
    position: relative;
    top: -15px;
  `;

  const creatureNose = css`
    width: 60px;
    height: 50px;
    border-radius: 20px;
    position: relative;
    background-color: ${secondaryColor};
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
  `;
  const noseNostril = css`
    width: 7px;
    height: 7px;
    background-color: ${mainColor};
  `;

  return (
    <div className={cssClass}>
      <div className={creatureEye}>
        <div className={eyeLeft}>
          <div className={eyeLid}></div>
          <div className={eyeIris}></div>
        </div>

        <div className={eyeRight}>
          <div className={eyeLid}></div>
          <div className={eyeIris}></div>
        </div>
      </div>

      <div className={creatureNoseLine}>
        <div className={creatureNose}>
          <div className={noseNostril}></div>
          <div className={noseNostril}></div>
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import styles from "../styles/css/components/StatusCircle.module.css"
import {ColorEnum} from "../enums/colorEnum";

const StatusCircle = (props: {color: ColorEnum}) => {
    const {color} = props;
    let colorClassName;
    switch (color) {
        case ColorEnum.RED: colorClassName = styles.red; break;
        case ColorEnum.GREEN: colorClassName = styles.green; break;
        case ColorEnum.GRAY: colorClassName = styles.gray;
    }

    return (
        <div className={`${styles.circle} ${colorClassName}`}>
        </div>
    );
};

export default StatusCircle;
import * as React from 'react';
import { PointCoordinates, Size, Unit, UnitName } from '../../Store/MyasoStore';
import * as c from './style.pcss';

export type UnitsProps = {
    units: Unit<UnitName>[];
}

function unitToStyle({
                         width,
                         height,
                         x,
                         y,
                     }: Size & PointCoordinates): React.CSSProperties {
    return {
        width: `${width}%`,
        height: `${height}%`,
        top: `${y + 50}%`,
        left: `${x + 50}%`,
    }
}

export class Units extends React.Component<UnitsProps, {}> {
    public render() {
        const {
            units,
        } = this.props;

        return <div>
            {
                units.map((unit, i) => {
                    return <div
                        key={ i }
                        className={ c.Units__unit }
                        style={ unitToStyle(unit) }
                    >

                    </div>;
                })
            }
        </div>;
    }
}

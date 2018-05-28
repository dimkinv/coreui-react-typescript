import * as React from 'react';
import classNames from 'classnames';
import { mapToCssModules } from 'reactstrap/lib/utils';

class Widget03 extends React.Component<any, any> {
  render() {
    const { className, cssModule, dataBox } = this.props;

    // demo purposes only
    const data = dataBox();
    const variant = data.variant;

    if (
      !variant ||
      ['facebook', 'twitter', 'linkedin', 'google-plus'].indexOf(variant) < 0
    ) {
      return null;
    }

    const icon = 'fa fa-' + variant;
    const keys = Object.keys(data);
    const vals = Object.values(data);

    const classes = mapToCssModules(
      classNames('social-box', className, variant),
      cssModule,
    );

    return (
      <div className={classes}>
        <i className={icon} />
        <ul>
          <li>
            <strong>{vals[1]}</strong>
            <span>{keys[1]}</span>
          </li>
          <li>
            <strong>{vals[2]}</strong>
            <span>{keys[2]}</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default Widget03;

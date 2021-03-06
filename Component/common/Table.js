var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import * as React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text } from './';
import { baseNativeComponent } from '../base';
import { componentHp } from '../../helper';
import { NativeFactory as f } from '../../class/Factory';
class Tr extends baseNativeComponent {
    render() {
        const defaultStyles = getStyles();
        const topProps = componentHp.createTopProps({
            style: [defaultStyles.Tr, this.props.style],
        });
        return React.createElement(View, __assign({}, trDefaultProps, this.props, topProps));
    }
}
class Th extends baseNativeComponent {
    render() {
        const defaultStyles = getStyles();
        const topProps = componentHp.createTopProps({
            style: [defaultStyles.Th, this.props.style],
        });
        return React.createElement(View, __assign({}, thDefaultProps, this.props, topProps));
    }
}
class ThText extends baseNativeComponent {
    render() {
        const defaultStyles = getStyles();
        const topProps = componentHp.createTopProps({
            style: [defaultStyles.ThText, this.props.style],
        });
        return React.createElement(Text, __assign({}, thTextDefaultProps, this.props, topProps));
    }
}
class Td extends baseNativeComponent {
    render() {
        const defaultStyles = getStyles();
        const topProps = componentHp.createTopProps({
            style: [defaultStyles.Td, this.props.style],
        });
        return React.createElement(View, __assign({}, tdDefaultProps, this.props, topProps));
    }
}
class TdText extends baseNativeComponent {
    render() {
        const defaultStyles = getStyles();
        const topProps = componentHp.createTopProps({
            style: [defaultStyles.TdText, this.props.style],
        });
        return React.createElement(Text, __assign({}, tdTextDefaultProps, this.props, topProps));
    }
}
export class Table extends baseNativeComponent {
    render() {
        const defaultStyles = getStyles();
        const topProps = componentHp.createTopProps({
            style: [defaultStyles.Table, this.props.style],
        });
        return React.createElement(View, __assign({}, tableDefaultProps, this.props, topProps));
    }
}
Table.Tr = Tr;
Table.Th = Th;
Table.ThText = ThText;
Table.Td = Td;
Table.TdText = TdText;
let _styles;
const getStyles = () => {
    if (!_styles && f.Device) {
        try {
            _styles = StyleSheet.create({
                Table: {
                    flexDirection: 'column',
                    alignItems: 'stretch',
                    padding: 0
                },
                Tr: {
                    flexDirection: 'row',
                    alignItems: 'stretch',
                    padding: 0,
                    margin: 0,
                },
                Th: {
                    flex: 1,
                    margin: 0,
                    padding: f.Device.getActualSize(3),
                    justifyContent: 'center',
                    alignItems: 'center'
                },
                ThText: {
                    flex: 1,
                    fontSize: f.Device.getActualSize(7),
                    fontWeight: 'bold',
                    margin: f.Device.getActualSize(3),
                    alignSelf: 'center',
                    textAlign: 'center'
                },
                Td: {
                    flex: 1,
                    margin: 0,
                    padding: f.Device.getActualSize(3),
                    justifyContent: 'center',
                    alignItems: 'center'
                },
                TdText: {
                    flex: 1,
                    fontSize: f.Device.getActualSize(7),
                    margin: f.Device.getActualSize(3),
                    alignSelf: 'center',
                    textAlign: 'center'
                }
            });
        }
        catch (e) {
        }
    }
    return _styles;
};
const tableDefaultProps = {};
const trDefaultProps = {};
const thDefaultProps = {};
const thTextDefaultProps = {};
const tdDefaultProps = {};
const tdTextDefaultProps = {};

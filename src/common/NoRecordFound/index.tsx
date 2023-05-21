import React from 'react';
import {ViewStyle} from 'react-native';
import {Card} from '../Container';
import {Typography} from '../Typography';
import {Link} from '../Link';

interface NoRecordFoundProps {
  title?: string;
  description: string;
  buttonLabel?: string;
  style?: ViewStyle;
  onPress?: () => void;
  buttonStyle?: ViewStyle;
  icon?: JSX.Element;
}

const NoRecordFound = ({
  title,
  description,
  buttonLabel,
  style,
  onPress,
  buttonStyle,
  icon,
}: NoRecordFoundProps) => {
  const onButtonPress = () => onPress && onPress();

  return (
    <Card
      style={{
        minHeight: 100,
        paddingHorizontal: 18,
        paddingVertical: 30,
        alignItems: 'center',
        ...style,
      }}>
      {icon && icon}
      {title && <Typography text={title} size={22} fw="bold" />}
      <Typography
        text={description}
        color="#666"
        style={{textAlign: 'center', marginTop: 10}}
        size={16}
      />

      {buttonLabel && (
        <Link
          style={{marginTop: 20, marginBottom: 10, ...buttonStyle}}
          onPress={onButtonPress}>
          <Typography text={buttonLabel} fw="bold" color="#0069B9" />
        </Link>
      )}
    </Card>
  );
};

export default NoRecordFound;

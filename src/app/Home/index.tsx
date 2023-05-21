import React, {useEffect, useState} from 'react';
import {classStatusTabs} from 'lib/constants';
import GlobalStyle from 'lib/globalStyle';
import {images} from 'lib/images';
import {
  Button,
  Container,
  Typography,
  Card,
  Row,
  Wrap,
  FlatList,
  VectorIcon,
  RadioBox,
  TouchableRipple,
  Avtar,
} from 'src/common';
import {colors} from 'lib/colors';
import {styles} from './styles';
import {useSelectedTheme} from 'lib/hooks';
import {ROUTES, navigate} from 'navigators/utils';
import {NotesProps} from 'lib/types';
import {getTitleFromArrayObj} from 'lib/functions';
import {useTodo} from 'src/contexts/TodoContext';

export default function Home() {
  const theme = useSelectedTheme();
  const {todos, getTodos, count} = useTodo();
  const [tab, setTab] = useState<number>(1);

  useEffect(() => {
    getTodos();
  }, []);

  const viewFullDescription = (description: string | undefined) => {
    console.log(description);
  };

  const renderTodoCards = ({
    item,
    index,
  }: {
    item: NotesProps;
    index: number;
  }) => (
    <Wrap
      style={{marginBottom: index == count - 1 ? 20 : 0}}
      key={`card_${index}`}>
      <Typography text="February 14" size={18} />
      <Card>
        <Row style={styles.cardRow}>
          <Wrap style={styles.rowWrap}>
            <Wrap style={styles.profileImgWrap}>
              <Avtar
                imageUri={images.womenProfile}
                size={100}
                containerStyle={GlobalStyle.imageStyle}
              />
            </Wrap>
          </Wrap>
          <Wrap style={styles.cardContentWrap}>
            <Typography text={item.title} size={16} fw="600" />
            <TouchableRipple
              onPress={() => viewFullDescription(item.description)}>
              <Typography
                text={item.description}
                color={colors.grey}
                style={{marginTop: 10, lineHeight: 22}}
                letterSpacing={false}
                noOfLine={3}
              />
            </TouchableRipple>
            <Row autoMargin={false}>
              <VectorIcon
                iconPack="Ionicons"
                name="time"
                color={theme?.primaryTextColor}
                size={18}
                style={{marginTop: 10}}
              />
              <Typography
                text={item.date}
                size={16}
                style={{width: 210, marginLeft: 10, marginTop: 10}}
              />
            </Row>

            <Row>
              <Button
                title="Settled"
                onPress={() => {}}
                style={styles.cardCancelBtn}
              />
              <Button
                title="Discard"
                onPress={() => {}}
                style={styles.cardCancelBtn}
              />
            </Row>
          </Wrap>
        </Row>
      </Card>
    </Wrap>
  );

  return (
    <Container>
      <Wrap autoMargin={false}>
        <FlatList
          ListHeaderComponent={
            <RadioBox
              data={classStatusTabs}
              onSelection={setTab}
              selected={tab}
              style={{width: 130}}
            />
          }
          data={todos.filter(data => data.type === tab)}
          renderItem={renderTodoCards}
          style={{height: '100%'}}
          noDataTitle="No notes found"
          noDataMsg={`Hey! You don't have any ${getTitleFromArrayObj(
            classStatusTabs,
            tab,
          )?.toLocaleLowerCase()} notes yet. Please come back later.`}
          onRetry={getTodos}
        />
      </Wrap>
      <Button
        onPress={() => navigate(ROUTES.AddNote)}
        style={GlobalStyle.globalStyle.addNewBtn}>
        <VectorIcon iconPack="Feather" name="plus" />
      </Button>
    </Container>
  );
}

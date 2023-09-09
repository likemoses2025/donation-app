import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import globalStyles from '../../assets/styles/globalStyle';
import Header from '../../components/Header/Header';
import Search from '../../components/Search/Search';
import SingleDonationItem from '../../components/SingleDonationItem/SingleDonationItem';
import Tab from '../../components/Tab/Tab';
import {Routes} from '../../navigation/Routes';
import {updateSelectedCategoryId} from '../../redux/reducers/Categories';
import {updateSelectedDonationId} from '../../redux/reducers/Donations';
import style from './style';
import {resetToInitialState} from '../../redux/reducers/User';
import {logOut} from '../../api/user';

const Home = ({navigation}) => {
  const dispatch = useDispatch();

  const user = useSelector(state => state.user);
  const categories = useSelector(state => state.categories);
  const donations = useSelector(state => state.donations);

  const [categoryPage, setCategoryPage] = useState(1);
  const [categoryList, setCategoryList] = useState([]);
  const [donationItems, setDonationItems] = useState([]);
  const [isLoadingCategories, setIsLoadingCategories] = useState(false);
  const categoryPageSize = 4;

  useEffect(() => {
    const items = donations.items;
    const filteredItems = items.filter(value =>
      value.categoryIds.includes(categories.selectedCategoryId),
    );
    setDonationItems(filteredItems);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categories.selectedCategoryId]);

  useEffect(() => {
    setIsLoadingCategories(true);
    setCategoryList(
      pagination(categories.categories, categoryPage, categoryPageSize),
    );
    setCategoryPage(prev => prev + 1);
    setIsLoadingCategories(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 1개의 페이지당 4개의 아이템이 나타나도록 한다.
  const pagination = (items, pageNumber, pageSize) => {
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    if (startIndex >= items.length) {
      return [];
    }
    return items.slice(startIndex, endIndex);
  };

  console.log('User', user);

  return (
    <SafeAreaView style={[globalStyles.backgroundWhite, globalStyles.flex]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style.header}>
          <View>
            <Text style={style.headerIntroText}>Hello, </Text>
            <View style={style.username}>
              <Header title={user.displayName + ' 👋'} />
            </View>
          </View>
          <View>
            <Image
              source={{uri: user.profileImage}}
              style={style.profileImage}
              resizeMode={'contain'}
            />
            <Pressable
              onPress={async () => {
                dispatch(resetToInitialState());
                await logOut();
              }}>
              <Header type={3} title={'Logout'} color={'#156CF7'} />
            </Pressable>
          </View>
        </View>
        <View style={style.searchBox}>
          <Search />
        </View>
        <Pressable style={style.highlightedImageContainer}>
          <Image
            style={style.highlightedImage}
            source={require('../../assets/images/highlighted_image.png')}
            resizeMode={'contain'}
          />
        </Pressable>

        <View style={style.categoryHeader}>
          <Header title={'Select Category'} type={2} />
        </View>
        {/* Category */}
        <View style={style.categoryHeader}>
          {isLoadingCategories ? (
            <Text>Loading....</Text>
          ) : (
            <FlatList
              // 스크롤이 절반에 이르면
              onEndReachedThreshold={0.5}
              // 새로운 데이터를 가져와서 기존 데이터에 삽입힌다.
              onEndReached={() => {
                setIsLoadingCategories(true);
                let newData = pagination(
                  categories.categories,
                  categoryPage,
                  categoryPageSize,
                );
                if (newData.length > 0) {
                  setCategoryList(prevState => [...prevState, ...newData]);
                  setCategoryPage(prevState => prevState + 1);
                }
                setIsLoadingCategories(false);
              }}
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              data={categoryList}
              renderItem={({item}) => (
                <View style={style.tab}>
                  <Tab
                    tabId={item.categoryId}
                    title={item.name}
                    isInactive={
                      item.categoryId !== categories.selectedCategoryId
                    }
                    onPress={value => dispatch(updateSelectedCategoryId(value))}
                  />
                </View>
              )}
            />
          )}
        </View>
        <View style={style.donationItemsContainer}>
          {donationItems.length > 0 &&
            donationItems.map(value => {
              const categoryInformation = categories.categories.find(
                val => val.categoryId === categories.selectedCategoryId,
              );
              return (
                <View
                  key={value.donationItemId}
                  style={style.singleDonationItem}>
                  <SingleDonationItem
                    onPress={selectedDonationId => {
                      dispatch(updateSelectedDonationId(selectedDonationId));
                      navigation.navigate(Routes.SingleDonationScreen, {
                        categoryInformation,
                      });
                    }}
                    donationItemId={value.donationItemId}
                    uri={value.image}
                    donationTitle={value.name}
                    price={parseFloat(value.price)}
                    badgeTitle={categoryInformation.name}
                  />
                </View>
              );
            })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

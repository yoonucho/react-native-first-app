/**
 * 포켓몬 목록을 가져와서 화면에 표시하는 메인 컴포넌트입니다.
 * 포켓몬의 속성(type)에 따라 색상을 다르게 표시하는 기능이 추가되었습니다.
 */
import { Stack, useLocalSearchParams } from "expo-router";
import { useEffect } from "react";
import { ScrollView, StyleSheet, Text } from "react-native";

export default function Details() {
  const params = useLocalSearchParams();
  console.log(params.name);

  useEffect(() => {}, []);

  async function fetchPokemonByName(name: string) {
    try {
      // fetch
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      <Stack.Screen options={{ title: params.name as string }} />
      <ScrollView
        contentContainerStyle={{
          gap: 16,
          padding: 16,
          backgroundColor: "red",
        }}
      >
        <Text>{params.name}</Text>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({});

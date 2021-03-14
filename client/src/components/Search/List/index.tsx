import React, { useContext, useState } from "react";
import { SearchContext } from "..";
import { useGet } from "../../../hooks";
import { IPaginated } from "../../../constants";
import { dummyItem, initialValue } from "./const";
import { Item } from "./Card";
import Container from "./Container";
import { dummyArray } from "../../../util";

export default function List() {
  const { url, queryUrl } = useContext(SearchContext);
  const [page, setPage] = useState(1);
  const query = `${url}?${queryUrl}&page=${page}`;
  const { loading, data } = useGet<IPaginated<any>>(query, initialValue);

  const handleChange = (_: React.ChangeEvent<unknown>, value: number) =>
    setPage(value);

  if (loading) {
    return (
      <Container handleChange={handleChange} page={page} count={1}>
        {dummyArray(10).map(() => (
          <Item item={dummyItem} url={url} />
        ))}
      </Container>
    );
  }

  return (
    <Container
      handleChange={handleChange}
      page={page}
      count={Math.ceil(data.total / 10)}
    >
      {data.data.map((item) => (
        <Item key={item.id} item={item} url={url} />
      ))}
    </Container>
  );
}

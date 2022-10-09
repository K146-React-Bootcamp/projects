import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import Container from "../../components/container";
import Header from "../../components/header";
import NoResult from "../../components/no-result";
import ProductList from "../../components/product-list";
import { API_BASE_URL } from "../../config";
import { appToast } from "../../utils";

export default function CategoryListPage() {
  const [keyword, setKeyword] = useState("");
  const [selectedSorting, setSelectedSorting] = useState("");
  const [showSorting, setShowSorting] = useState(false);
  const [items, setItems] = useState([]);
  const [noResult, setNoResult] = useState(false);
  const params = useParams();

  useEffect(() => {
    loadItems();
  }, [keyword]);

  const loadItems = (sorting = "") => {
    const uri = `${API_BASE_URL}/products?categoryId=${params.id}&sorting=${sorting}&keyword=${keyword}`;
    appToast.showToast(true);
    fetch(uri).then(resp => resp.json()).then(items => {
      setItems(items);
      setNoResult(items.length === 0);
       appToast.showToast(false);
    }).catch(er => {
      console.log(er);
    })
  }

  const onSearch = (event) => {
		event.preventDefault();

		const formData = new FormData(event.currentTarget);
    const keyword = formData.get("search");
    debugger
		setKeyword(keyword);
	};

  const applySorting = () => {
    setShowSorting(false);
  }
  return (
    <>
      <Header
				onSubmit={onSearch}
				value={keyword}
				onChange={setKeyword}
				selectedSorting={selectedSorting}
				applySorting={applySorting}
				onSortingChange={(value) => {
					setSelectedSorting(value);
				}}
				showSorting={showSorting}
				setShowSorting={setShowSorting}
      />
      <Container>

        <ProductList products={items} showCategoryLink={false} />

        <NoResult show={noResult} message="Kategoriye ait ürün bulunamadı"/>
      </Container>
    </>
  )
}
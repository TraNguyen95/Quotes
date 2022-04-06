import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NEMO } from "../utils/config";
import { deleteQuotesAction, getQuotesAction } from "../redux/action";
import styled from "styled-components";
import Swal from "sweetalert2";
import { FaTrash, FaEdit } from "react-icons/fa";
import Loading from "../components/Loading";
import { Heading } from "../components/Heading";
import { AntDesignTable } from "../styles/AntDesign";
import { Breakpoints } from "../styles/Breakpoints";

export default function Manage() {
  document.title = `Manage Quotes - ${NEMO}`;

  const quotes = useSelector((state) => state.QuotesReducer.quotesList);
  const isLoading = useSelector((state) => state.QuotesReducer.isLoading);
  const dispatch = useDispatch();

  localStorage.setItem("ADMIN", "nemo-quotes")
  const ADMIN = localStorage.getItem("ADMIN");

  useEffect(() => {
    dispatch(getQuotesAction());
  }, [dispatch]);

  const deleteQuote = async (id) => {
    if (ADMIN !== process.env.REACT_APP_NEMO) {
      return Swal.fire({
        position: "center",
        icon: "warning",
        title: "Warning",
        text: "You Do Not Have Permission To Delete",
      });
    }

    const result = await Swal.fire({
      position: "center",
      icon: "warning",
      title: "Delete Quotes Warning",
      text: "Do you want to delete this quote?",
      showConfirmButton: true,
      confirmButtonText: "Yes, delete it!",
      confirmButtonColor: "var(--red)",
      showCancelButton: true,
    });
    if (result.isConfirmed) {
      dispatch(deleteQuotesAction(id))
    }
  };

  const columns = [
    {
      title: "ID",
      width: "5%",
      fixed: "left",
      render: (record) => quotes.indexOf(record) + 1,
    },
    {
      title: "Quote",
      dataIndex: "quote",
      width: "55%",
      render: (record) =>
        record.split("\n").map((text, index) => <p key={index}>{text}</p>),
    },
    {
      title: "Author",
      dataIndex: "author",

      width: "15%",
    },
    {
      title: "Title",
      dataIndex: "title",
      width: "15%",
    },
    {
      title: "Action",
      width: "10%",
      render: (quote) => {
        return (
          <>
            <S.Link key={1} to={`admin/edit/${quote._id}`}>
              <S.Edit />
            </S.Link>
            <S.Delete key={2} onClick={() => deleteQuote(quote._id)} />
          </>
        );
      },
    },
  ];

  const data = quotes;

  function onChange() {
    window.scroll(0, 0);
  }

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <S.Manage>
          <Heading>Manage Quotes</Heading>
          <AntDesignTable
            columns={columns}
            dataSource={data}
            onChange={onChange}
            rowKey={"_id"}
            scroll={{ x: 1300 }}
          />
        </S.Manage>
      )}
    </>
  );
}

const S = {
  Manage: styled.div`
    min-height: 100vh;
    margin: 1rem 3rem 0;
    animation: fade-in 1s ease-in-out;

    ${Breakpoints.md} {
      margin: 1rem 2rem 0;
    }

    ${Breakpoints.sm} {
      margin: 1rem 1rem 4rem;
    }
  `,

  Link: styled.a``,

  Edit: styled(FaEdit)`
    cursor: pointer;
    color: var(--fa-edit);
    font-size: 1.5rem;
    margin: 0 0.5rem;
  `,

  Delete: styled(FaTrash)`
    cursor: pointer;
    color: var(--fa-delete);
    margin: 0 0.5rem;
  `,
};

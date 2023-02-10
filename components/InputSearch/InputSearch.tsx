import React, { FormEvent, FormEventHandler, useState } from "react";
import { Button, InputBase } from "@mui/material";
import { useStore } from "@/store/index";

export const InputSearch = () => {
    const { onSeach } = useStore();
    const [search, setSearch] = useState("");

    const onSearch = (e: FormEvent<any>) => {
        e.preventDefault();
        onSeach(search);
    };
    return (
        <form onSubmit={onSearch}>
            <InputBase
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                sx={{
                    background: "#fff",
                    color: "#222222",
                    height: "62px",
                    borderRadius: "24px",
                    padding: ".8em .8em",
                    width: "100%",
                    mt: "2.1rem",
                    fontWeight: 700,
                }}
                placeholder="search"
                endAdornment={
                    <Button
                        variant="contained"
                        color="secondary"
                        size="large"
                        type="submit"
                        sx={{
                            borderRadius: "100px",
                            fontWeight: 700,
                            boxShadow: "none",
                            paddingX: "2rem",
                        }}
                    >
                        Search
                    </Button>
                }
            />
        </form>
    );
};


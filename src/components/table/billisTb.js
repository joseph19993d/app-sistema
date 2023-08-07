"use client"

import { useMemo, useState } from "react";
import { Table } from "./Table";
import { createColumnHelper } from "@tanstack/react-table";
import colors, { current } from "tailwindcss/colors";
import { Eye, ListBullets, PencilSimpleLine, Plus, Trash } from "@phosphor-icons/react";
import { Actions } from ".";
import { currencyFormat } from "@/utils/currency";
import { NavLinks } from "../navLinks";
import { Modal } from "../modal";

export function BillsTb({ data, actions }) {
    const [isOpenModal, setIsOpenModal] = useState(false)
    const [selectedBilling, setSelectedBilling] = useState()
    const columnHelper = useMemo(() => createColumnHelper(data), [data])
    const columns = useMemo(() => {
        const _columns = [
            columnHelper.accessor('i', {
                header: () => '#',
                cell: info => parseInt(info.row.id) + 1
            }),
            columnHelper.accessor('name', {
                header: () => 'Servicio',
                cell: info => info.getValue()
            }),
            columnHelper.accessor('Description', {
                header: () => 'Description',
                cell: info => info.getValue()
            }),
            columnHelper.accessor('dueDate', {
                header: () => 'dueDate',
                cell: info => info.getValue()
            }),
            columnHelper.accessor('deadline', {
                header: () => 'deadline',
                cell: info => info.getValue()
            }),
            columnHelper.accessor('invoicePrice', {
                header: () => 'invoice Price',
                cell: info => currencyFormat(info.getValue()),
                footer: () => {
                    const total = data.reduce((acc, cur) => {
                        return acc + cur.invoicePrice
                    }, 0)
                    return `Total ${currencyFormat(total)}`
                }
            }),
        ]

        if (Array.isArray(actions)) {
            _columns.push(columnHelper.accessor('actions', {

                header: () => 'Actions',

                cell: info => {
                    return (
                        <div className="flex justify-center gap-2">
                            {
                                actions.includes(Actions.VIEW) && (
                                    <Eye
                                        className="cursor-pointer"
                                        style={{ userSelect: 'none' }}
                                        //onClick={console.log("clicked VIEW: ",info.row.original)}
                                        size={22}
                                        color={colors.slate[400]}

                                    />
                                )
                            }
                            {
                                actions.includes(Actions.EDIT) && (
                                    <PencilSimpleLine
                                        className="cursor-pointer"
                                        style={{ userSelect: 'none' }}
                                        //onClick={console.log("clicked EDIT: ",info.row.original)}
                                        size={22}
                                    //onPointerLeave={(e) => e.target.style.color = colors.slate[400]}

                                    //onPointerEnter={(e) => e.target.style.color = 'black'}

                                    />
                                )
                            }
                            {
                                actions.includes(Actions.REMOVE) && (
                                    <Trash
                                        className="cursor-pointer"
                                        style={{ userSelect: 'none' }}
                                        onClick={() => console.log("clicked REMOVE: ", info.row.original)}
                                        size={22}
                                        color={colors.slate[400]}

                                    />
                                )
                            }
                        </div>
                    )
                }
            }))
        }
        return _columns

    }, [columnHelper, data, actions])

    const handleOpenModal = () => setIsOpenModal(false)
    const handleCloseModal = () => setIsOpenModal(false);
    return (

        <div>
            <div className="mt-1 flex ">
                <div className="flex flex-1 items-center  ">
                    <button className='bg-backgroudnDark text-white px-3 py-1  my-1 rounded-l-lg  hover:bg-backgroudnDark2  '>
                        <Plus size={20} color={colors.white} weight="bold" />
                    </button>
                    <button className='bg-backgroudnDark text-white px-3 py-1  my-1 rounded-r-lg  hover:bg-backgroudnDark2  '>
                        <ListBullets size={20} color={colors.white} weight="bold" />
                    </button>

                </div>
            </div>

            <Table data={data} columns={columns} />
            <Modal
                isOpen = {false}
                closeModal = {handleCloseModal}>
                    El kks
            </Modal>

        </div>
    )
}
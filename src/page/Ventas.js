import React from "react";
//import bootstrap from 'bootstrap'
import { useQuery, gql } from "@apollo/client";

const GET_VENTAS = gql`
    query GetVentas {
        ventas {
            id
            fecha_venta
            num_tiket
            id_sku
            comentarios
            id_vendedor
        }
    }
`;

function Ventas({ onVentaSelected }) {
    const { loading, error, data } = useQuery(GET_VENTAS);

    if (loading) return "Loading...";
    if (error) return `Error! ${error.message}`;

    return (
        <div className="content-wrapper">
            <div className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1 className="m-0 text-dark">Ventas</h1>
                        </div>
                        <div className="col">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Fecha:  {$d} / {$m} / {$y}"
                                disabled
                            />
                        </div>
                        <div class="col">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Sucursal: name_sucursal"
                                disabled
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div class="card connectedSortable p-2">
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="SKU, Descripcion" aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <div class="input-group-append">
                        <button class="btn btn-primary" type="button" id="button-addon2">Buscar</button>
                    </div>
                </div>
                <div className="table-responsive">
                    <table className="table table-hover">
                        <thead className="thead-light">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Fecha</th>
                                <th scope="col"># tiket</th>
                                <th scope="col">SKU</th>
                                <th scope="col">Descripción</th>
                                <th scope="col">Precio</th>
                                <th scope="col">Vendedor</th>
                                <th scope="col">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.ventas.map((venta) => (
                                <tr key={venta.id}>
                                    <td>#</td>
                                    <td>{venta.fecha_venta}</td>
                                    <td>{venta.num_tiket}</td>
                                    <td>{venta.id_sku}</td>
                                    <td>{venta.comentarios}</td>
                                    <td>PRECIO</td>
                                    <td>{venta.id_vendedor}</td>
                                    <td>Ver / Editar</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
export default Ventas;

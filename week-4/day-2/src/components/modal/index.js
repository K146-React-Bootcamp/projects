import React from "react";
import { CloseIcon } from "../icons";

export default function Modal({ show, onClose, children, title }) {
	if (!show) return null;

	return (
		<div className="modal fade show" tabindex="-1" style={{ display: "block" }}>
			<div className="modal-dialog">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">
							{title}
						</h5>
						<CloseIcon onClick={onClose}/>
					</div>
					<div className="modal-body">{children}</div>
				</div>
			</div>
		</div>
	);
}

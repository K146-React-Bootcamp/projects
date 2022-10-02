import React from "react";

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
						<button
							type="button"
							className="btn-close"
							onClick={onClose}
							aria-label="Close"
						></button>
					</div>
					<div className="modal-body">{children}</div>
				</div>
			</div>
		</div>
	);
}

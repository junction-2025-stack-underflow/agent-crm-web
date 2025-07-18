'use client';
import React, { useState } from 'react';
import './Table.css';
import {
  List,
  ListItemButton,
  ListItemText,
  Pagination,
  Popover,
} from '@mui/material';
import StatutBadge from './StatutBadge/StatutBadge';
import { FiMoreVertical } from 'react-icons/fi';

export default function Table({ tr, td, count, page }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedId, setSelectedId] = useState(null);

  const handleClose = () => {
    setAnchorEl(null);
    setSelectedId(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div className="table-container">
      <div className="table-div">
        <table>
          <thead>
            <tr className="head">
              {tr.map((header: string, index: number) => (
                <td key={index}>{header}</td>
              ))}
            </tr>
          </thead>
          <tbody>
            {td.map((line: any, rowIndex: number) => (
              <tr key={rowIndex}>
                {Array.isArray(line) ? (
                  line.map((elm, colIndex) => {
                    const isLastCol = colIndex === tr.length - 1;
                    const isActionHeader =
                      tr[tr.length - 1].trim().toLowerCase() === 'action';

                    return (
                      <td key={colIndex}>
                        {isLastCol && isActionHeader ? (
                          <>
                            <FiMoreVertical
                              style={{ cursor: 'pointer' }}
                              onClick={(e) => {
                                setAnchorEl(e.currentTarget);
                                setSelectedId(rowIndex);
                              }}
                            />
                          </>
                        ) : (
                          elm?.text && (
                            <span
                              style={{
                                borderRadius: '4px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                gap: '3px',
                              }}
                            >
                              {[
                                'VIP',
                                'Nouveau',
                                'Régulier',
                                'Black lister',
                              ].includes(elm.text) ? (
                                <StatutBadge text={elm.text} />
                              ) : (
                                elm.text
                              )}
                            </span>
                          )
                        )}
                      </td>
                    );
                  })
                ) : (
                  <td colSpan={line.colspan} style={{ textAlign: 'center' }}>
                    {line.text}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <List dense>
          {['VIP', 'Nouveau', 'Régulier', 'Black lister'].map((option, i) => (
            <ListItemButton key={i}>
              <ListItemText primary={option} />
            </ListItemButton>
          ))}
        </List>
      </Popover>
    </div>
  );
}

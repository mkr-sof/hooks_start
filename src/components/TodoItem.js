import React, {useEffect, useState} from 'react'

export default function TodoItem({title, id, completed}) {
  const [checked, setChecked] = useState(completed)

  const cls = ['todo',]

  if (checked){
    cls.push('completed')
  }

  useEffect(() => {
    // This effect will run whenever the "completed" prop changes.
    setChecked(completed);
  }, [completed]);

  return (
    <li className={cls.join(' ')}>
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
        <span>{title}</span>

        <i
          className="material-icons red-text"
        >
          delete
        </i>
      </label>
    </li>
  )
}

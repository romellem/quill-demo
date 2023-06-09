import { getUsers, type User, users } from './User';
import { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import './index.css';
import 'quill-mention';
import 'quill-mention/dist/quill.mention.css';
import 'react-quill/dist/quill.snow.css';

function App() {
  useEffect(() => {
    // const fetchUsers = async () => {
    //   setUsers(await getUsers());
    // };

    // fetchUsers();
  }, []);

  const [value, setValue] = useState('');
  // const [users, setUsers] = useState<User[]>([]);

  // const handleChange = (content, delta, source, editor) => {
  //   console.log(content, delta, source, editor);
  // };

  const modules = {
    mention: {
      mentionDenotationChars: ['@'],
      minChars: 3,
      isolateCharacter: true,
      source: (searchTerm: string, renderList: (matches: {id: number, value: string}[], searchTerm: string) => void, mentionChar: string) => {
        const values = users.map((v, i) => ({id: i, value: v}));

        if (searchTerm.length === 0) {
          renderList(values, searchTerm);
        } else {
          const matches = [];
          for (let i = 0; i < values.length; i++) {
            if (~values[i].value.toLowerCase().indexOf(searchTerm.toLowerCase())) {
              matches.push(values[i]);
            }
          }
          renderList(matches, searchTerm);
        }
      },
    },
  };

  return (
    <div className="App">
      <ReactQuill
        theme="snow"
        modules={modules}
      />
    </div>
  )
}

export default App

import { Link } from "react-router-dom";

export default function MenuCategorias() {

  const menus = [
    {
      title: "Alimentação",
      path: "/categoria/alimentacao",
      items: [
        { name: "Rações", path: "/categoria/alimentacao/racoes" },
        { name: "Sementes", path: "/categoria/alimentacao/sementes" },
        { name: "Petiscos", path: "/categoria/alimentacao/petiscos" },
      ],
    },

    {
      title: "Habitat",
      path: "/categoria/habitat",
      items: [
        { name: "Gaiolas", path: "/categoria/habitat/gaiolas" },
        { name: "Poleiros", path: "/categoria/habitat/poleiros" },
        { name: "Ninhos", path: "/categoria/habitat/ninhos" },
      ],
    },

    {
      title: "Enriquecimento",
      path: "/categoria/enriquecimento",
      items: [
        { name: "Brinquedos", path: "/categoria/enriquecimento/brinquedos" },
        { name: "Escadas", path: "/categoria/enriquecimento/escadas" },
        { name: "Balanços", path: "/categoria/enriquecimento/balancos" },
      ],
    },

    {
      title: "Monte seu Habitat",
      path: "/monte-seu-habitat",
      items: null,
    },

    {
      title: "Aprenda",
      path: "/aprenda",
      items: null,
    },
  ];

  return (
    <div className="flex gap-10">

      {menus.map((menu) => (

        <div
          key={menu.title}
          className="relative group"
        >

          <Link
            to={menu.path}
            className="hover:text-orange-600 transition"
          >
            {menu.title}
          </Link>

          {Array.isArray(menu.items) && (

            <div className="absolute left-0 top-full hidden group-hover:block">

              <ul className="
                mt-2
                w-56
                bg-white
                border
                rounded-md
                shadow-lg
                z-50
              ">

                {menu.items.map((item) => (

                  <li key={item.name}>

                    <Link
                      to={item.path}
                      className="
                        block
                        px-4
                        py-2
                        hover:bg-gray-100
                      "
                    >
                      {item.name}
                    </Link>

                  </li>

                ))}

              </ul>

            </div>

          )}

        </div>

      ))}

    </div>
  );
}
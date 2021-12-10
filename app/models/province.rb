class Province < ApplicationRecord
    include Featurable

    featurable :geom, [:pro_name]
end
